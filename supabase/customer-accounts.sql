-- Run once in the SQL editor of the restaurant's Supabase project.
-- No service-role key is used by the website. RLS is the authorization boundary.
begin;

create table public.wm_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  created_at timestamptz not null default now(),
  constraint wm_profile_name_valid check (
    char_length(display_name) <= 60 and display_name = btrim(display_name)
    and display_name !~ '[[:cntrl:]]'
  )
);

create table public.wm_sauce_catalogue (id text primary key);

create table public.wm_favourite_sauces (
  user_id uuid not null references auth.users(id) on delete cascade,
  sauce_id text not null references public.wm_sauce_catalogue(id),
  created_at timestamptz not null default now(),
  primary key (user_id, sauce_id)
);

alter table public.wm_profiles enable row level security;
alter table public.wm_favourite_sauces enable row level security;
alter table public.wm_sauce_catalogue enable row level security;

create policy "Read own profile" on public.wm_profiles
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "Edit own profile" on public.wm_profiles
  for update to authenticated using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
create policy "Read own favourites" on public.wm_favourite_sauces
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "Save own favourites" on public.wm_favourite_sauces
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Remove own favourites" on public.wm_favourite_sauces
  for delete to authenticated using ((select auth.uid()) = user_id);
create policy "Read sauce catalogue" on public.wm_sauce_catalogue
  for select to authenticated using (true);

revoke all on public.wm_profiles, public.wm_favourite_sauces, public.wm_sauce_catalogue from public, anon, authenticated;
grant usage on schema public to authenticated;
grant select on public.wm_profiles to authenticated;
grant update (display_name) on public.wm_profiles to authenticated;
grant select, insert, delete on public.wm_favourite_sauces to authenticated;
grant select on public.wm_sauce_catalogue to authenticated;

create function public.wm_create_profile() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.wm_profiles(user_id) values (new.id) on conflict do nothing;
  return new;
end;
$$;
revoke all on function public.wm_create_profile() from public, anon, authenticated;
create trigger wm_profile_created after insert on auth.users
  for each row execute function public.wm_create_profile();

-- Include any accounts that predate this migration.
insert into public.wm_profiles(user_id) select id from auth.users on conflict do nothing;

insert into public.wm_sauce_catalogue(id) values
  ('1983-suicide-2'),
  ('al-bundy-h'),
  ('alabama-white-bbq-n'),
  ('angry-caesar-s'),
  ('apple-honey-g-n'),
  ('apple-jerk-bbq-s'),
  ('apple-pie-bbq-n'),
  ('apple-reign-s'),
  ('apple-thai-s'),
  ('applewood-bbq-s'),
  ('applewood-dry-smoke-rub-s'),
  ('are-u-nuts-n'),
  ('are-u-nuts-s'),
  ('arizona-gold-n'),
  ('avatar-n'),
  ('aztec-blaze-s'),
  ('bacon-garlic-parmesan-n'),
  ('bbq-cajun-parmesan-s'),
  ('bell-city-bbq-n'),
  ('bell-city-blue-n'),
  ('bell-city-fire-h'),
  ('bell-city-spicy-s'),
  ('bell-city-thai-s'),
  ('black-apple-n'),
  ('blue-cheese-cajun-s'),
  ('blue-cheese-evil-3'),
  ('blue-cheese-gold-n'),
  ('blue-cheese-hot-h'),
  ('blue-cheese-medium-s'),
  ('blue-cheese-mild-n'),
  ('brazilian-bbq-s'),
  ('brazilian-gold-s'),
  ('bud-bundy-h'),
  ('buffalava-s'),
  ('buffalicious-s'),
  ('buffalo-bbq-s'),
  ('buffalo-blue-cheese-s'),
  ('buffalo-blue-cheese-gold-s'),
  ('buffalo-blue-cheese-hot-h'),
  ('buffalo-blue-cheese-medium-s'),
  ('buffalo-blue-cheese-mild-s'),
  ('buffalo-caesar-s'),
  ('buffalo-cajun-s'),
  ('buffalo-cajun-blue-cheese-s'),
  ('buffalo-cajun-ranch-s'),
  ('buffalo-gold-s'),
  ('buffalo-hot-h'),
  ('buffalo-jerk-s'),
  ('buffalo-maple-cajun-s'),
  ('buffalo-medium-s'),
  ('buffalo-mild-h'),
  ('buffalo-ranch-s'),
  ('buffalo-suicide-3'),
  ('buffapeno-s'),
  ('bundy-h'),
  ('butter-garlic-n'),
  ('cajun-bang-s'),
  ('cajun-bbq-s'),
  ('cajun-dry-d'),
  ('cajun-gold-s'),
  ('cajun-parmesan-s'),
  ('cajun-picante-h'),
  ('campfire-bbq-n'),
  ('canadian-bbq-n'),
  ('canadian-gold-n'),
  ('canadian-smoke-n'),
  ('caribbean-gold-s'),
  ('carolina-gold-n'),
  ('chapple-hill-s'),
  ('cherry-koolaid-n'),
  ('chipotle-bbq-s'),
  ('chipotle-jerk-s'),
  ('chipotle-ranch-s'),
  ('chocolate-bbq-n'),
  ('chocolate-bundy-h'),
  ('chocolate-chip-s'),
  ('cinnabon-n'),
  ('cinnagold-n'),
  ('creamy-bacon-parmesan-n'),
  ('creamy-dill-pickle-n'),
  ('dan-brazilian-s'),
  ('danero-dave-2'),
  ('dillicious-bbq-n'),
  ('dillicious-gold-n'),
  ('dillicious-hot-h'),
  ('dillicious-medium-s'),
  ('dillicious-mild-n'),
  ('dillicious-thai-s'),
  ('dilly-dilly-n'),
  ('dirty-deebs-3'),
  ('double-dare-300k'),
  ('egyptian-lover-s'),
  ('evil-medium-3'),
  ('fast-n-furious-3m'),
  ('frank-castle-3'),
  ('french-toast-n'),
  ('fruit-of-the-boom-n'),
  ('gannon-gold-n'),
  ('garlic-parmesan-n'),
  ('golden-parmesan-n'),
  ('gretzky-99-n'),
  ('gummy-bear-n'),
  ('gummy-bite-s'),
  ('hail-caesar-bbq-n'),
  ('hail-caesar-cheezy-bbq-n'),
  ('hail-caesar-garlic-lovers-n'),
  ('hail-caesar-gold-n'),
  ('hail-caesar-hot-h'),
  ('hail-caesar-medium-s'),
  ('hail-caesar-mild-n'),
  ('hawaiian-punch-1'),
  ('herky-jerky-2'),
  ('honey-pure-n'),
  ('honey-lime-n'),
  ('honey-bbq-n'),
  ('honey-cajun-s'),
  ('honey-chipotle-s'),
  ('honey-garlic-n'),
  ('honey-jerk-s'),
  ('honey-sesame-n'),
  ('honey-teriyaki-n'),
  ('hot-apple-pie-h'),
  ('hot-chocolate-h'),
  ('hot-cinnamon-rolls-h'),
  ('hot-honey-h'),
  ('hot-sauce-h'),
  ('hurricane-gold-2'),
  ('italian-stallion-n'),
  ('italian-stallion-s'),
  ('jalapeno-bbq-s'),
  ('jalapeno-gold-s'),
  ('jalapeno-ranch-s'),
  ('jelly-donut-n'),
  ('jerk-bbq-s'),
  ('jerk-dry-s'),
  ('jerk-me-sweetly-s'),
  ('jerkolina-s'),
  ('kc-bbq-n'),
  ('kc-blue-bbq-n'),
  ('kc-hot-bbq-h'),
  ('kc-jerk-bbq-s'),
  ('kc-med-bbq-s'),
  ('kc-vs-buffalo-s'),
  ('kelly-bundy-h'),
  ('kick-ass-bbq-n'),
  ('killer-cherry-koolaid-1'),
  ('lemon-pepper-s'),
  ('louisiana-butter-s'),
  ('magic-travis-special-h'),
  ('mamma-mia-s'),
  ('mawlife-s'),
  ('mean-caroline-2'),
  ('medium-bbq-s'),
  ('mild-bbq-n'),
  ('mrs-krabbappel-s'),
  ('nascar-500k'),
  ('nutty-chocolatta-n'),
  ('o-canada-n'),
  ('ohio-gold-s'),
  ('omg-s'),
  ('parm-pepper-s'),
  ('pb-j-dream-n'),
  ('peanut-butter-jam-n'),
  ('peanut-butter-apple-n'),
  ('peanut-butter-heaven-n'),
  ('peanut-butter-honey-n'),
  ('peanut-butter-maple-n'),
  ('peanut-butter-only-n'),
  ('peanut-butter-supreme-n'),
  ('peg-bundy-h'),
  ('peppercorn-ranch-s'),
  ('pirates-gold-3'),
  ('plain-n'),
  ('porky-pie-bbq-n'),
  ('queen-of-thorns-s'),
  ('ranch-bbq-n'),
  ('ranch-gold-n'),
  ('ranch-hot-h'),
  ('ranch-medium-s'),
  ('ranch-mild-n'),
  ('raspberry-beret-n'),
  ('raspberry-chipotle-s'),
  ('raspberry-habanero-1'),
  ('raspberry-jalapeno-s'),
  ('raspberry-jerk-s'),
  ('red-flame-mix-s'),
  ('ridillculous-n'),
  ('roman-gold-n'),
  ('salt-pepper-d'),
  ('salt-vinegar-n'),
  ('scaredy-cat-1m'),
  ('seasoning-salt-n'),
  ('sesame-gold-n'),
  ('sierra-classic-s'),
  ('smashin-apples-1'),
  ('smokey-bacon-n'),
  ('sour-cream-onion-n'),
  ('spicy-cherry-koolaid-s'),
  ('sweet-buffalo-gal-s'),
  ('sweet-caroline-n'),
  ('sweet-chili-jerk-s'),
  ('sweet-chili-thai-s'),
  ('sweet-lava-s'),
  ('sweet-marie-s'),
  ('teriyaki-n'),
  ('tex-mex-rub-s'),
  ('texas-gold-n'),
  ('the-big-apple-s'),
  ('throttle-house-s'),
  ('tropical-jerk-s'),
  ('tropical-paradise-n'),
  ('vanilla-sky-n'),
  ('waco-texas-gold-1'),
  ('white-cheddar-cheese-dust-n'),
  ('x-no-heat-n'),
  ('x-1-flame-1'),
  ('x-2-flames-2'),
  ('x-3-flames-3'),
  ('x-hot-1'),
  ('x-spicy-s');

commit;
