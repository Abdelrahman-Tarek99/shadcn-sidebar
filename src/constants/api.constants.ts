export const APIVersion = "/v1";

export const API = {
  baseURL:
    import.meta.env.MODE == "development"
      ? import.meta.env.VITE_LOCAL_SERVER
      : import.meta.env.VITE_PUBLIC_SERVER,
  login: `${APIVersion}/login`,
  notificationEvents: `${APIVersion}/notification-events`,
  notificationParameters: `${APIVersion}/notification-parameters`,
  notificationChannels: `${APIVersion}/notification-channels`,
  users: `${APIVersion}/users`,
  getCustomers: `${APIVersion}/customers`,
  getCustomer: `${APIVersion}/customers`,
  createNotification: `${APIVersion}/requests`,
  consumers: `${APIVersion}/loyalty/consumers`,
  getConsumer: `${APIVersion}/loyalty/consumers/consumer`,
  groupUsers: `${APIVersion}/users/groups`,
  groups: `${APIVersion}/groups`,
  verifyUser: `${APIVersion}/users/authenticate-user`,
  initResetPassword: `${APIVersion}/users/init-reset-password`,
  changePassword: `${APIVersion}/users/change-password`,
  generateOtp: `${APIVersion}/users/otp`,
  verifyOtp: `${APIVersion}/users/otp`,
  setNewPassword: `${APIVersion}/users/change-password`,
  getpartyCodes: `${APIVersion}/parties/partyCodes`,
  roles: `${APIVersion}/roles`,
  partyManagement: `${APIVersion}/parties`,
  partyRequestsManagement: `${APIVersion}/parties/requests`,
  partyOtherLoyaltyPrograms: `${APIVersion}/parties/partyCode/other-loyalty-programs`, // replace party code
  getOtherLoyaltyPrograms: `${APIVersion}/parties/other-loyalty-programs`,
  updateOtherLoyaltyPrograms: `${APIVersion}/parties/programID/other-loyalty-programs`, // replace programID
  partySite: `${APIVersion}/locations`,
  bueinssRules: `${APIVersion}/business-rules`,
  products: `${APIVersion}/products`,
  createSystem: `${APIVersion}/app-types`,
  eventGroup: `${APIVersion}/event-groups`,
};
