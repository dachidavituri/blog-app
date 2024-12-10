import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogFormShema, BlogsFrom } from "@/schema";
import { blogsDefaultValues } from "@/data";
import { useTranslation } from "react-i18next";
const CreateForm: React.FC = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogsFrom>({
    resolver: zodResolver(blogFormShema),
    defaultValues: blogsDefaultValues,
  });
  const onSubmit: SubmitHandler<BlogsFrom> = (data) => {
    console.log(data);
  };
  return (
    <form
      className="flex flex-col gap-3 bg-slate-400 p-5 rounded-2xl w-[450px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl text-center">{t("blog.mainTitle")}</h1>
      <div>
        <label>{t("blog.title_ka")}</label>
        <Controller
          control={control}
          name="title_ka"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Enter title"
              className={`${errors.title_ka ? "border-red-600" : "border-gray-300"}`}
            />
          )}
        />
        {errors.title_ka && (
          <span className="text-red-600 font-semibold">
            {t(errors.title_ka.message ?? "")}
          </span>
        )}
      </div>
      <div>
        <label>{t("blog.title_en")}</label>
        <Controller
          control={control}
          name="title_en"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Enter title"
              className={`${errors.title_en ? "border-red-600" : "border-gray-300"}`}
            />
          )}
        />
        {errors.title_en && (
          <span className="text-red-600 font-semibold">
            {t(errors.title_en.message ?? "")}
          </span>
        )}
      </div>
      <div>
        <label>{t("blog.description_ka")}</label>
        <Controller
          control={control}
          name="description_ka"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Enter description"
              className={`${errors.description_ka ? "border-red-600" : "border-gray-300"}`}
            />
          )}
        />
        {errors.description_ka && (
          <span className="text-red-600 font-semibold">
            {t(errors.description_ka.message ?? "")}
          </span>
        )}
      </div>
      <div>
        <label>{t("blog.description_en")}</label>
        <Controller
          control={control}
          name="description_en"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Enter description"
              className={`${errors.description_en ? "border-red-600" : "border-gray-300"}`}
            />
          )}
        />
        {errors.description_en && (
          <span className="text-red-600 font-semibold">
            {t(errors.description_en.message ?? "")}
          </span>
        )}
      </div>
      <div>
        <label>{t("blog.image_url")}</label>
        <Controller
          control={control}
          name="image_url"
          render={({ field }) => (
            <Input
              {...field}
              type="file"
              className={`${errors.image_url ? "border-red-600" : "border-gray-300"}`}
            />
          )}
        />
        {errors.image_url && (
          <span className="text-red-600 font-semibold">
            {t(errors.image_url.message ?? "")}
          </span>
        )}
      </div>
      <Button type="submit">{t("blog.create_button")}</Button>
    </form>
  );
};
export default CreateForm;
