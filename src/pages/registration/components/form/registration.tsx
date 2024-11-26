import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import useCurrentLang from "@/i18n/currentLang";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/supabase/auth";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { RegisterForm } from "@/data";
const RegistrationForm: React.FC = () => {
  const { t } = useTranslation();
  const currentLang = useCurrentLang();

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterForm>({
    defaultValues: { email: "", password: "", repeatPassword: "" },
  });
  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });
  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    handleRegister(data);
  };
  return (
    <form
      className="flex flex-col gap-3 bg-slate-400 p-5 rounded-2xl w-[480px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl">{t("register.signup")}</h1>
      <p>
        <Trans>register.create</Trans>
      </p>
      <div>
        <label>
          <Trans>register.email</Trans>
        </label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: t("auth.emailRequired"),
            minLength: {
              value: 5,
              message: t("auth.emailMinLength"),
            },
            maxLength: {
              value: 30,
              message: t("auth.emailMaxLength"),
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: t("auth.emailPattern"),
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="john@example.com"
              className={`${errors.email ? "border-red-600" : "border-gray-300"}`}
            />
          )}
        />
        {errors.email ? (
          <span className="text-red-600 font-semibold">
            {errors.email.message}
          </span>
        ) : null}
      </div>
      <div>
        <label>
          <Trans>register.password</Trans>
        </label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: t("auth.passRequired"),
            minLength: {
              value: 6,
              message: t("auth.passMinLength"),
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Enter password"
              className={`${errors.password ? "border-red-600" : "border-gray-300"}`}
              type="password"
            />
          )}
        />
        {errors.password ? (
          <span className="text-red-600 font-semibold">
            {errors.password.message}
          </span>
        ) : null}
      </div>
      <div>
        <label>
          <Trans>register.cPassword</Trans>
        </label>
        <Controller
          name="repeatPassword"
          control={control}
          rules={{
            required: t("auth.passRequired"),
            minLength: {
              value: 6,
              message: t("auth.passMinLength"),
            },
            validate: {
              matchesPassword: (value) => {
                if (value !== getValues("password")) {
                  return t("register.passwordsDontMatch");
                }
              },
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Repeat password"
              className={`${errors.repeatPassword ? "border-red-600" : "border-gray-300"}`}
              type="password"
            />
          )}
        />
        {errors.repeatPassword ? (
          <span className="text-red-600 font-semibold">
            {errors.repeatPassword.message}
          </span>
        ) : null}
      </div>
      <Button className="bg-blue-600 font-bold text-white">
        <Trans>register.signupBtn</Trans>
      </Button>
      <p>
        <Trans>register.acc</Trans>{" "}
      </p>
      <Link
        to={`/${currentLang}/login`}
        className="text-blue-600 font-bold hover:underline"
      >
        <Trans>register.login</Trans>
      </Link>
    </form>
  );
};
export default RegistrationForm;
