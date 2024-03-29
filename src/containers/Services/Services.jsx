import React from 'react';
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import { ItemIcon, ServiceIcon2, ServiceIcon3, ServiceIcon4 } from "../../assets/icons";

import "./Services.scss"

const Services = () => {

	const servicesCardData = [
		{
			id: 0,
			icon: <ItemIcon />,
			title: "Телеграм канал, где мы делимся опытом (новые изделия, акции, обучающий контент)"
		},

		{
			id: 1,
			icon: <ServiceIcon2 />,
			title: "Профессиональные менеджеры и электронный документооборот"
		},

		{
			id: 2,
			icon: <ServiceIcon3 />,
			title: "Предоставляем контент для интернет-магазинов (фото, рендеры)"
		},

		{
			id: 3,
			icon: <ServiceIcon4 />,
			title: "Собственные каталоги для каждого типа изделия"
		},
	];

	return (
		<div className="Services">
			<h3 className="main-title">ПРЕДЛАГАЕМ УДОБНЫЕ УСЛОВИЯ ДЛЯ ДИЛЕРОВ</h3>
			<p className="Services-text">С нами более 500 партнёров</p>

			<div className="Services-items">
				{
					servicesCardData.map(el => (
						<ServicesCard
							key={el.id}
							title={el.title}
							icon={el.icon}
						/>
					))
				}
			</div>

			<div className="Services-contact">
				<input className="Services-input" type="text" placeholder="Телефон" />
				<button className="Services-btn">Стать дилером</button>
			</div>
		</div>
	);
}

export default Services;