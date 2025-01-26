export const getApiCatalog = () => {
  const config = useRuntimeConfig();
  return config.public.apiCatalog;
};

export const getCredentialsToCatalog = () => {
  const config = useRuntimeConfig();
  return {
    email: config.public.catalogEmail,
    password: config.public.catalogPassword
  };
};
