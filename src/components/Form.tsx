import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  day: number;
  month: number;
  year: number;
}

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-2xl flex gap-3 font-poppins text-neutral-smokey-grey font-bold pb-8 border-b-2"
    >
      <div className="flex flex-col gap-2">
        <label
          className={`${
            errors.day ? "text-primary-light-red" : "text-neutral-smokey-grey"
          }`}
        >
          Day
        </label>
        <input
          className={`w-30 focus:outline-none rounded-lg border-2 border-neutral-smokey-grey text-neutral-offblack px-3 py-1 ${
            errors.day
              ? "border-primary-light-red focus:ring-1 focus:ring-primary-light-red"
              : "border-gray-300"
          }`}
          {...register("day", {
            required: "Must be a valid day",
            min: { value: 1, message: "The day number cannot be less than 1" },
            max: {
              value: 31,
              message: "The day number cannot be greater than 31",
            },
          })}
        />
        {errors.day && (
          <p className="text-primary-light-red text-xs w-30 text-center">
            {errors.day.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          className={`${
            errors.month ? "text-primary-light-red" : "text-neutral-smokey-grey"
          }`}
        >
          Month
        </label>
        <input
          className={`w-30 focus:outline-none rounded-lg border-2 border-neutral-smokey-grey text-neutral-offblack px-3 py-1 ${
            errors.month
              ? "border-primary-light-red focus:ring-1 focus:ring-primary-light-red"
              : "border-gray-300"
          }`}
          {...register("month", {
            required: "Must be a valid day",
            min: {
              value: 1,
              message: "The month number cannot be less than 1",
            },
            max: {
              value: 12,
              message: "The month number cannot be greater than 12",
            },
          })}
        />
        {errors.month && (
          <p className="text-primary-light-red text-xs w-30 text-center">
            {errors.month.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label>Year</label>
        <input
          className="w-30 rounded-lg border-2 border-neutral-smokey-grey text-neutral-offblack px-3 py-1"
          {...register("year", { required: true })}
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer hover:bg-violet-400 transition-all duration-300 translate-y-20 rounded-full w-18 h-18 bg-primary-purple flex justify-center items-center"
      >
        <img src="/src/assets/images/icon-arrow.svg" />
      </button>
    </form>
  );
};

export default Form;
