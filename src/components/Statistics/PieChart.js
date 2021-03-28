import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Pie, G2 } from '@ant-design/charts';

const PieChart = () => {
	const { itemsList } = useContext(GlobalContext);
	//計算各種類的總金額
	const calMoney = (category) => {
		const result = itemsList
			.filter((item) => item.category === category)
			.map((item) => item.price);
		if (result.length !== 0) {
			return result.reduce((a, b) => a + b);
		} else return '';
	};
	const foodMoney = calMoney('飲食');
	const gasMoney = calMoney('交通油錢');
	const dailyMoney = calMoney('日常用品');
	const entertainmentMoney = calMoney('娛樂');
	const houseMoney = calMoney('居家');
	const learnMoney = calMoney('學習');
	const medicalMoney = calMoney('醫療');
	const phoneMoney = calMoney('電話網路');
	const waterMoney = calMoney('水電瓦斯');
	const gymMoney = calMoney('運動健身');
	const clothsMoney = calMoney('治裝費');

	//顏色
	G2.registerTheme('new-theme', {
		defaultColor: '#86b825',
		colors20: [
			'#86b825',
			'#FF6B3B',
			'#626681',
			'#FFC100',
			'#9FB40F',
			'#76523B',
			'#DAD5B5',
			'#0E8E89',
			'#E19348',
			'#F383A2',
			'#247FEA',
		],
	});
	var data = [
		{
			type: '飲食',
			value: foodMoney,
		},
		{
			type: '交通油錢',
			value: gasMoney,
		},
		{
			type: '日常用品',
			value: dailyMoney,
		},
		{
			type: '娛樂',
			value: entertainmentMoney,
		},
		{
			type: '居家',
			value: houseMoney,
		},
		{
			type: '學習',
			value: learnMoney,
		},
		{
			type: '醫療',
			value: medicalMoney,
		},
		{
			type: '電話網路',
			value: phoneMoney,
		},
		{
			type: '水電瓦斯',
			value: waterMoney,
		},
		{
			type: '運動健身',
			value: gymMoney,
		},
		{
			type: '治裝費',
			value: clothsMoney,
		},
	];
	var config = {
		appendPadding: 10,
		data: data,
		angleField: 'value',
		colorField: 'type',
		theme: 'new-theme',
		radius: 1,
		innerRadius: 0.64,
		statistic: {
			title: {
				customHtml: <h3>金額</h3>,
			},
		},
		meta: {
			value: {
				formatter: function formatter(v) {
					return ''.concat(v, '$');
				},
			},
		},
		label: {
			type: 'inner',
			offset: '-50%',
			style: {
				textAlign: 'center',
				fontSize: 20,
				fontWeight: 200,
				shadowColor: 'white',
				shadowBlur: 5,
			},
			autoRotate: false,
			content: '{value}',
		},
		interactions: [
			{ type: 'element-selected' },
			{ type: 'element-active' },
			{ type: 'pie-statistic-active' },
		],
	};
	return <Pie {...config} />;
};

export default PieChart;
