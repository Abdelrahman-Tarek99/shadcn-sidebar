import { AppRoutes } from "@/components/Routes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLoginForm } from "./useLoginForm";

export function LoginForm() {
  const { control, handleSubmit, onSubmit } = useLoginForm();
  return (
    <div className="w-full h-full fixed inset-0 ">
      <form
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to={AppRoutes.login}
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="password"
                      type="password"
                      placeholder="********"
                      required
                      {...field}
                    />
                  )}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
