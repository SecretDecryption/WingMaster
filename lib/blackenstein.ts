export const BLACKENSTEIN_HEAT = '10 Million Scoville';
export const BLACKENSTEIN_WAIVER_KEY = 'wingmaster:blackenstein:waiver:v1';

export type BlackensteinWaiverRecord = {
  accepted: true;
  acceptedAt: string;
};

export function isBlackensteinItem(item: { category?: string } | null | undefined) {
  return item?.category === 'Blackenstein';
}

export function hasCurrentBlackensteinWaiver(storage: Pick<Storage, 'getItem'> | null | undefined) {
  if (!storage) return false;
  try {
    const record = JSON.parse(storage.getItem(BLACKENSTEIN_WAIVER_KEY) ?? 'null') as BlackensteinWaiverRecord | null;
    return record?.accepted === true && typeof record.acceptedAt === 'string';
  } catch {
    return false;
  }
}

export function saveBlackensteinWaiver(storage: Pick<Storage, 'setItem'>, acceptedAt = new Date().toISOString()) {
  storage.setItem(BLACKENSTEIN_WAIVER_KEY, JSON.stringify({ accepted: true, acceptedAt } satisfies BlackensteinWaiverRecord));
}
