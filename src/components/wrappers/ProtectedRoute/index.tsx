import { ComponentType, useEffect } from "react";
import { useVerifyUser } from "@ejada/providers";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { AppRoutes } from "@ejada/navigation";
import { HTTPCookies } from "@ejada/common";
/*
 * ProtectedRouteInterface
 * isAdminRoute: current route requires admin privileges
 * component: React component to render
 */
interface ProtectedRouteInterface {
  isAdminRoute?: boolean;
  component: ComponentType;
}
export function ProtectedRoute({
  component: Component,
}: ProtectedRouteInterface) {
  const { mutate, isError } = useVerifyUser();

  // Get user access token from cookies
  const accessToken = Cookies.get(HTTPCookies.token);

  // Verify the user access token, re run validation is the mutate function changed
  //TODO remove this and replace it with verification logic
  useEffect(
    function () {
      if (accessToken) {
        mutate({
          accessToken: accessToken ? accessToken : "",
          password: "password",
          authMethod: "email",
          authMethodValue: "ThisIsAuthMethodValue",
        });
      }
    },
    [accessToken, mutate],
  );

  return (
    <>
      {/* TODO: Access token is undefined after the request is being sent so should remove the undefined  */}
      {isError || accessToken == "" || accessToken == undefined ? (
        <Navigate to={AppRoutes.login} />
      ) : (
        <Component />
      )}
    </>
  );
}
