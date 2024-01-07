import {useEffect, useState} from "react";
import {getQuizByUser} from "../../services/apiService";
import "./ListQuiz.scss"
import {useNavigate} from "react-router-dom";
import _ from "lodash"
export const ListQuiz = (props) => {
    const [arrayQuiz, setArrayQuiz] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        getQuizData()
    }, []);
    const getQuizData = async () => {
        const response = await getQuizByUser()
        if (response.EC === 0) {
            setArrayQuiz(response.DT)
        }
    }
    return (
        <div className="list-quiz-container container">
            {
                arrayQuiz && arrayQuiz.length > 0 &&
                arrayQuiz.map((item, index) => {
                    return (
                        <div key={index} className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src={`data:image/jpeg;base64,${item.image}`} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Quizz {item.id}</h5>
                                <p className="card-text">{item.description}</p>
                                <button className="btn btn-primary" onClick={() => navigate(`/quiz/${item.id}`,{state : {quizTitle: item.description}})}>Start Now</button>
                            </div>
                        </div>
                    )
                })

            }
            {
                arrayQuiz && arrayQuiz.length === 0 &&
                <div>You don't have any quiz now</div>

            }
        </div>
    )
}
