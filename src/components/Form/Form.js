import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./index.css";
import "../../fonts/stylesheet.css";
import * as yup from "yup";
import { MySelect } from "../MySelect/MySelect";

const phoneMask = /^\+375(17|29|33|44)[0-9]{7}$/;
const stringAndNumberReg = /^[а-яА-ЯёЁa-zA-Z0-9 ]+$/;
const stringReg = /^[а-яА-ЯёЁa-zA-Z ]+$/;
const schema = yup.object().shape({
  pib: yup
    .string()
    .required("Поле обов'язкове")
    .matches(stringAndNumberReg, "Невірний формат"),
  enterprise: yup
    .string()
    .required("Поле обов'язкове")
    .matches(stringAndNumberReg, "Невірний формат"),
  phone: yup
    .string()
    .required("Поле обов'язкове")
    .matches(phoneMask, "Невірний формат телефону"),
  answer: yup
    .string()
    .required("Поле обов'язкове")
    .matches(stringReg, "Невірний формат"),
  select: yup.string().required("Виберіть вікторину").nullable(true),
});

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    reset({
      keepErrors: true,
      keepDirty: true,
      keepIsSubmitted: false,
      keepTouched: false,
      keepIsValid: false,
      keepSubmitCount: false,
    });
    console.log(data);
  };

  return (
    <div className="form-container">
      <form id="form" className="form" onSubmit={handleSubmit(submitForm)}>
        <div className="form__inputs">
          <div className="input-container">
            <label className="input-label" htmlFor="pib">
              ПІБ*
            </label>
            <input
              id="pib"
              className="input first-input"
              type="text"
              name="pib"
              {...register("pib")}
              // style={ errors.pib && {border: "1px solid red"} }
            />
            {errors.pib && <p className="helper-text">{errors.pib.message}</p>}
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="enterprise">
              Підприємство*
            </label>
            <input
              id="enterprise"
              className="input second-input"
              type="text"
              name="enterprise"
              {...register("enterprise")}
            />
            {errors.enterprise && (
              <p className="helper-text">{errors.enterprise.message}</p>
            )}
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="phone">
              Номер телефону*
            </label>
            <input
              id="phone"
              className="input third-input"
              type="text"
              name="phone"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="helper-text">{errors.phone.message}</p>
            )}
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="answer">
              Відповідь*
            </label>
            <input
              id="answer"
              className="input fourth-input"
              type="text"
              name="answer"
              {...register("answer")}
            />
            {errors.answer && (
              <p className="helper-text helper-answer">
                {errors.answer.message}
              </p>
            )}
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="answer">
              Вікторина*
            </label>
            <Controller
              render={({ field: { onChange } }) => (
                <MySelect onChange={onChange} />
              )}
              name="select"
              control={control}
              defaultValue={null}
            />
            {errors.select && (
              <p className="helper-text">{errors.select.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          id="submit"
          form="form"
          className="input submit-button"
        >
          Надіслати
        </button>
      </form>
    </div>
  );
};
