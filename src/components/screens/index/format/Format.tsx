// STYLES
import style from './Format.module.scss';

export default function Format() {
	return (
		<section className={style['format']}>
			<div className='container flex flex-col items-center justify-center gap-10'>
				<table className={style['format__table']}>
					<thead>
						<tr>
							<th>Формат инвестиций</th>
							<th>Приобретение паев ЗПИФ</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Минимальная сумма инвестиций</td>
							<td>от 1 млн руб.</td>
						</tr>
						<tr>
							<td>Доходность инвестора (IRR)</td>
							<td>от 30% годовых</td>
						</tr>
						<tr>
							<td>Минимальный срок инвестиций</td>
							<td>от 6 месяцев</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}
