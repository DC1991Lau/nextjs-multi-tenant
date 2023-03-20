export function exclude<Tenant, Key extends keyof Tenant>(
  tenant: Tenant,
  keys: Key[]
): Omit<Tenant, Key> {
  for (let key of keys) {
    delete tenant[key];
  }
  return tenant;
}
