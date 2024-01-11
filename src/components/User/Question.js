import _ from "lodash"

export const Question = (props) => {
    const {data, index, handleCheckBox} = props;
    const checkBox = (event, questionId, answerId) => {
        handleCheckBox(questionId, answerId)
    }
    if (_.isEmpty(data)) return (<></>)
    return (<div className=".q-child-container">
        {data?.image && <>
            <div align="center">
                <img src={`data:image/jpeg;base64,${data.image}`} alt="" width="300px"/>
            </div>
            <br/>
        </>}
        <div className="question">Question {index}: {data.question}</div>
        <div className="answer">
            {data.answers && data.answers.length > 0 && data.answers.map((item, index) => {
                return (<div className="a-child" key={index}>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={item.isSelected}
                               onClick={(event) => checkBox(event, data.id, item.id)}/>
                        <label className="form-check-label">
                            {item.description}
                        </label>
                    </div>
                </div>)
            })}
        </div>
    </div>);
}