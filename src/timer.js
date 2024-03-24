import React from "react"
const Timer=({days,hours,minutes,seconds})=>

{
    return(
        <div>
            <h1>Stop watch</h1>
            <table>
                <tbody>
                    <tr>
                        <th>{days}</th>
                        <th>{hours}</th>
                        <th>{minutes}</th>
                        <th>{seconds}</th>
                    </tr>
                    <tr>
                        <td>days</td>
                        <td>Hours</td>
                        <td>minutes</td>
                        <td>seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
export default Timer