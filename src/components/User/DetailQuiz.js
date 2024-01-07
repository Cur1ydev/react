import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getQuizById, submitAnswer} from "../../services/apiService";
import _ from "lodash";
import "./DetailQuiz.scss";
import {Question} from "./Question";
import {toast} from "react-toastify";
import {ModalShowResult} from "./ModalShowResult";

export const DetailQuiz = (props) => {
    const param = useParams();
    const location = useLocation();
    const [quiz, setQuiz] = useState(null);
    const [index, setIndex] = useState(0);
    const [showModalResult, setshowModalResult] = useState(false);
    const [questionResult, setQuestionResult] = useState({});
    const id = param.id
    useEffect(() => {
        getQuiz()
    }, [id]);
    const getQuiz = async () => {
        const response = await getQuizById(id);
        if (response.EC === 0) {
            setQuiz(_.chain(response.DT)
                .groupBy('id')
                .map((value, key) => {
                    let answers = [];
                    let question = null;
                    let image = null;
                    value.forEach((item) => {
                        question = item.description;
                        image = item.image
                        answers.push({
                            id: item.answers.id, description: item.answers.description, isSelected: false
                        })
                    })
                    return {id: key, answers, image, question}
                })
                .value())
        }
    }
    const handlePrev = () => {
        setIndex(index - 1)
    }
    const handleNext = () => {
        setIndex(index + 1)
    }
    const handleCheckBox = (questionId, answerId) => {
        let quizClone = _.cloneDeep(quiz);
        let result = null
        let question = quizClone.find((item) => {
            if (item.id === questionId) {
                result = item.answers.map((value) => {
                    if (value.id === answerId) value.isSelected = !value.isSelected;
                })
                return result;
            }
        })
        let index = quizClone.findIndex((item) => +item.id === +questionId)
        if (index > -1) {
            quizClone[index] = question;
            setQuiz(quizClone)
        }
    }
    const handleFinish = async () => {
        let payload = {
            quizId: +id, answers: []
        };
        if (quiz && quiz.length > 0) {
            quiz.forEach((item) => {
                let questionId = +item.id;
                let userAnswerId = [];
                item.answers.forEach((value) => {
                    if (value.isSelected) {
                        userAnswerId.push(+value.id)
                    }
                })
                payload.answers.push({
                    questionId, userAnswerId
                })
            })

        }
        let checkAnsEmpty = payload.answers.find((item) => item.userAnswerId.length === 0)
        if (checkAnsEmpty) {
            toast.error(`Bạn có câu hỏi ${index + 1} chưa chọn đáp án. Vui lòng chọn 1 đáp án để nộp bài`);
        } else {
            const response = await submitAnswer(payload);
            console.log("check response : ", response);
            if (response.EC === 0) {
                setshowModalResult(true);
                setQuestionResult({
                    countCorrect: response.DT.countCorrect, countTotal: response.DT.countTotal
                })
            }
            // toast.success("Đã chọn tất cả đáp án")
        }
        console.log("check payload:", payload);
    }
    return (<div className="detail-quiz-container">
        <div className="left-content">
            <div className="title">
                Quiz {id}: {location?.state?.quizTitle}
            </div>
            <hr/>
            <div className="q-body">
                <img src="" alt=""/>
            </div>
            <div className="q-content">
                <Question
                    index={index + 1}
                    data={quiz?.length > 0 && quiz[index]}
                    handleCheckBox={handleCheckBox}
                />
            </div>
            <div className="footer">
                {index > 0 && <button className="btn btn-primary ml-3" onClick={() => handlePrev()}>Prev</button>}
                {quiz && index < quiz.length - 1 &&
                    <button className="btn btn-secondary" onClick={() => handleNext()}>Next</button>}
                <button className="btn btn-warning" onClick={() => handleFinish()}>Finish</button>
            </div>
        </div>
        <div className="right-content">
            count down
        </div>
        <ModalShowResult
            show={showModalResult}
            setShow={setshowModalResult}
            result={questionResult}
        />
    </div>)
}