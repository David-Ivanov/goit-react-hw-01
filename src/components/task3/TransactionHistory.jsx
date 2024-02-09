import css from "../../css/task3/TransactionHistory.module.css"

export const TransactionHistory = ({ transactions }) => {
    return (<table>
        <thead>
            <tr>
                <th className={css.head}>Type</th>
                <th className={css.head}>Amount</th>
                <th className={css.head}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transactions.map(transaction => {
                return (<tr className={css.itemLine} key={transaction.id}>
                    <td className={css.itemColumn}>{transaction.type}</td>
                    <td className={css.itemColumn}>{transaction.amount}</td>
                    <td className={css.itemColumn}>{transaction.currency}</td>
                </tr>);
            })}
        </tbody>

    </table>);

}