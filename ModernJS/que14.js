const mergeProfile = (profile, updates) => {
  return {
    ...profile,
    ...updates,
    address: {
      ...profile.address,
      ...updates.address
    }
  };
};
