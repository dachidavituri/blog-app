import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { fillProfileInfo } from "@/supabase/account";
import { useState } from "react";
import { loginAtom } from "@/store";
import { useAtomValue } from "jotai";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQueryClient } from "@tanstack/react-query";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ProfileForm } from "@/data";
const Form: React.FC = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const user = useAtomValue(loginAtom);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProfileForm>({
    defaultValues: {
      username: "",
      name_ka: "",
      name_en: "",
      surname_ka: "",
      surname_en: "",
      phone: "",
      avatar_url: "",
    },
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { mutate: handleProfile } = useMutation({
    mutationKey: ["profile"],
    mutationFn: fillProfileInfo,
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["profile-info"],
      });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      if (error.message === "Username is already taken") {
        setErrorMessage("Username is already taken.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    },
    onSuccess: () => {
      setErrorMessage("");
    },
  });

  const onSubmit: SubmitHandler<ProfileForm> = (data) => {
    handleProfile({ ...data, id: user?.user.id });
  };

  return (
    <form
      className="flex flex-col gap-3 bg-slate-400 p-5 rounded-2xl w-[450px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl">{t("profile.info")}</h1>
      <div>
        <label>{t("profile.username")}</label>
        <Controller
          control={control}
          name="username"
          rules={{
            required: t("profile.usernameReqired"),
            minLength: {
              value: 4,
              message: t("profile.userMinLength"),
            },
            maxLength: {
              value: 20,
              message: t("profile.userMaxLength"),
            },
          }}
          render={({ field }) => (
            <Input
              placeholder="Enter username"
              {...field}
              onChange={(e) => {
                setValue(
                  "avatar_url",
                  `https://api.dicebear.com/9.x/pixel-art/svg?seed=${e.target.value}`,
                );
                field.onChange(e);
              }}
              className={`${errors.username ? "border-red-600" : "border-gray-300"}`}
            />
          )}
        />
        {errorMessage && <p className="text-red-700">{errorMessage}</p>}
        {errors.username && (
          <span className="text-red-600 font-semibold">
            {errors.username.message}
          </span>
        )}
      </div>
      <Tabs defaultValue="name_ka" className="w-full mt-3">
        <TabsList className="w-full">
          <TabsTrigger value="name_ka">
            <label>{t("profile.name")} (Georgian)</label>
          </TabsTrigger>
          <TabsTrigger value="name_en">
            <label>{t("profile.name")} (English)</label>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="name_ka">
          <Controller
            control={control}
            name="name_ka"
            rules={{
              required: t("profile.nameReq"),
              minLength: {
                value: 3,
                message: t("profile.nameMinLength"),
              },
              maxLength: {
                value: 10,
                message: t("profile.nameMaxLength"),
              },
            }}
            render={({ field }) => (
              <Input
                placeholder="Enter name in Georgian"
                {...field}
                className={`${errors.name_ka ? "border-red-600" : "border-gray-300"}`}
              />
            )}
          />
          {errors.name_ka && (
            <span className="text-red-600 font-semibold">
              {errors.name_ka.message}
            </span>
          )}
        </TabsContent>
        <TabsContent value="name_en">
          <Controller
            control={control}
            name="name_en"
            rules={{
              required: t("profile.nameReq"),
              minLength: {
                value: 3,
                message: t("profile.nameMinLength"),
              },
              maxLength: {
                value: 10,
                message: t("profile.nameMaxLength"),
              },
            }}
            render={({ field }) => (
              <Input
                placeholder="Enter name in English"
                {...field}
                className={`${errors.name_en ? "border-red-600" : "border-gray-300"}`}
              />
            )}
          />
          {errors.name_en && (
            <span className="text-red-600 font-semibold">
              {errors.name_en.message}
            </span>
          )}
        </TabsContent>
      </Tabs>
      <Tabs defaultValue="surname_ka" className="w-full mt-3">
        <TabsList className="w-full">
          <TabsTrigger value="surname_ka">
            <label>{t("profile.surname")} (Georgian)</label>
          </TabsTrigger>
          <TabsTrigger value="surname_en">
            <label>{t("profile.surname")} (English)</label>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="surname_ka">
          <Controller
            control={control}
            name="surname_ka"
            rules={{
              required: t("profile.surnameReq"),
              minLength: {
                value: 4,
                message: t("profile.surnameMinLength"),
              },
              maxLength: {
                value: 15,
                message: t("profile.surnameMaxLength"),
              },
            }}
            render={({ field }) => (
              <Input
                placeholder="Enter surname in Georgian"
                {...field}
                className={`${errors.surname_ka ? "border-red-600" : "border-gray-300"}`}
              />
            )}
          />
          {errors.surname_ka && (
            <span className="text-red-600 font-semibold">
              {errors.surname_ka.message}
            </span>
          )}
        </TabsContent>
        <TabsContent value="surname_en">
          <Controller
            control={control}
            name="surname_en"
            rules={{
              required: t("profile.surnameReq"),
              minLength: {
                value: 4,
                message: t("profile.surnameMinLength"),
              },
              maxLength: {
                value: 15,
                message: t("profile.surnameMaxLength"),
              },
            }}
            render={({ field }) => (
              <Input
                placeholder="Enter surname in English"
                {...field}
                className={`${errors.surname_en ? "border-red-600" : "border-gray-300"}`}
              />
            )}
          />
          {errors.surname_en && (
            <span className="text-red-600 font-semibold">
              {errors.surname_en.message}
            </span>
          )}
        </TabsContent>
      </Tabs>
      <div>
        <label>{t("profile.phone")}</label>
        <Controller
          control={control}
          name="phone"
          rules={{
            required: t("profile.phoneReq"),
            pattern: {
              value: /^[0-9]{9}$/,
              message: t("profile.phoneExactLength"),
            },
          }}
          render={({ field }) => (
            <Input
              placeholder="Enter phone number"
              {...field}
              className={`${errors.phone ? "border-red-600" : "border-gray-300"}`}
            />
          )}
        />
        {errors.phone && (
          <span className="text-red-600 font-semibold">
            {errors.phone.message}
          </span>
        )}
      </div>

      <Button type="submit">{t("profile.save")}</Button>
    </form>
  );
};

export default Form;
