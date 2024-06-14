import Button from "./Button";
import { Container } from "./Container";
import Text from "./Text";

import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Input from "./Form/Input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="w-full text-white">
			<div className="bg-black py-6 md:py-16 md:pb-4 text-center">
				<Container>
					<img src="/img/logo-menu.png" alt="icono" className="mx-auto w-[50px] md:w-[100px] mb-4 invert" />
					<img src="/img/logotipo.png" className="mx-auto w-[130px] md:w-auto mb-10 invert" alt="Casa Raco" />
					<Newsletter />

					<address style={{ fontStyle: "normal" }}>
						<Text className="mb-6">Casa Raco Casa, C. Francisco I. Madero 99, Centro, 27980 Parras de la Fuente, Coah., México, Parras de la Fuente</Text>

						<ul className="block sm:flex sm:items-center sm:justify-center sm:gap-10">
							<li className="mb-4 sm:mb-0">
								<TbPhoneCall className="inline-block text-cafe" />
								<a href="tel:+5218424239902"> <Text> +52 1 842 423 9902 </Text> </a>
							</li>
							<li className="mb-4 sm:mb-0">
								<MdOutlineEmail className="inline-block text-cafe" />{" "}
								<a className="underline" href="mailto:reservaciones@casaraco.mx"><Text> reservaciones@casaraco.mx </Text> </a>
							</li>
							<li>
								<FiFacebook className="inline-block text-cafe" />
								<FaInstagram className="inline-block text-cafe" />
								<Text>
									 @casa.raco
								</Text>
							</li>
						</ul>
					</address>
				</Container>
			</div>

			<div className="bg-cafe py-5 font-instrumentSans">
				<Container>
					<ul className="mx-auto flex w-full flex-col items-center justify-between lg:justify-center relative text-xs md:flex-row lg:text-sm xl:text-base">
						<li className="mb-0 lg:mb-0 lg:absolute lg:left-0">Casa Raco</li>
						<li className="mb-0 lg:mb-0">
							<ul className="flex items-center justify-center flex-wrap text-center">
								<li className="w-full md:w-auto">{t("footer.politicas")}</li>
								<li className="mx-3 hidden md:block md:w-auto">|</li>
								<li className="w-full md:w-auto">Cookies</li>
								<li className="mx-3 hidden md:block">|</li>
								<li className="w-full md:w-auto">{t("footer.cancelacion")}</li>
								<li className="mx-3 hidden md:w-auto md:block">|</li>
								<li className="w-full md:w-auto">{t("footer.derechos")}</li>
							</ul>
						</li>
						<li className="lg:absolute lg:right-0">
							<a href="https://madeby.partners/" target="_blank" rel="noopener noreferrer">
								{t("footer.made")} <span className="font-bold">MadebyPartners®</span>
							</a>
						</li>
					</ul>
				</Container>
			</div>
		</footer>
	);
};

const Newsletter = () => {
	const { t } = useTranslation();

	const [show, setShow] = useState(false);

	return (
		<div className="border border-white max-w-[780px] py-9 px-4 md:px-6 mx-auto mb-10">
			<Text.TitleSections className="text-white">{t("footer.news.title")}</Text.TitleSections>
			<Text className="mb-8">{t("footer.news.desc")}</Text>
			{!show ? (
				<Button.Cafe onClick={() => setShow(true)} className="rounded-none hover:text-black hover:border-black">
					{t("footer.news.btn")}
				</Button.Cafe>
			) : (
				<FormMail onClose={() => setShow(false)} />
			)}
		</div>
	);
};

const FormMail = ({ onClose }) => {
	const { t } = useTranslation();
	const {
		formState: { errors },
		register,
		handleSubmit,
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		console.log(data);

		toast.success("Enviado");
		onClose();
		// console.log(response);

		reset();
		// axios
		// 	.post(_PATH_SOURCES + "send/mailEvento", data)
		// 	.then((response) => {
		// 		toast.success("Enviado");
		// 		console.log(response);
		// 		reset();
		// 	})
		// 	.catch(() => {
		// 		toast.error("Intente más tarde");
		// 		reset();
		// 	});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="sm:flex items-center w-full max-w-md mx-auto mb-3 seva-fields formkit-fields">
			<div className="relative w-full mr-3 formkit-field mb-4 sm:mb-0">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
					<svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
						<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
						<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
					</svg>
				</div>
				<Input
					type="email"
					name={"email"}
					validate={true}
					register={register}
					rules={{
						required: "Este campo es obligatorio",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: "Ingrese un correo electrónico válido",
						},
					}}
					validateError={!!errors.email}
					// validateErrorMessage={errors.email?.message}
				/>
			</div>
			<button data-element="submit" className="formkit-submit">
				<div className="formkit-spinner">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<span className="px-5 py-3 text-sm font-medium text-center text-white bg-cafe rounded-lg cursor-pointer uppercase">{t("subscribe")}</span>
			</button>
		</form>
	);
};

export default Footer;
