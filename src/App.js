import logo from './logo.svg';
import classes from './App.module.scss';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {flip, flipOut, resetSteps, startGame, stepInc} from './store/actions/actions';
import {size} from './store/reducers/areaReducer';
import Steps from './components/Steps/Steps';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import {Link} from 'react-router-dom';

const App = () => {
        const cards = useSelector(state => state.area.cards)
        const steps = useSelector(state => state.steps.steps)
        const [buttonText, setButtonText] = useState('start')
        const [start, setStart] = useState(false)
        const [choiceFirst, setChoiceFirst] = useState(null)
        const [choiceSec, setChoiceSec] = useState(null)
        const [winningArray, setWinningArray] = useState([])
        const [win, setWin] = useState(false)
        const [step, setStep] = useState(steps)
        const dispatch = useDispatch()

        const choiceHandler = (card) => {
            choiceFirst ? setChoiceSec(card) : setChoiceFirst(card)
        }

        const resetChoice = () => {
            setChoiceFirst(null)
            setChoiceSec(null)
        }

        useEffect(() => {
            if (choiceFirst && choiceSec) {
                if (choiceFirst.value === choiceSec.value) {
                    setWinningArray(prev => [...prev, choiceFirst, choiceSec])
                    resetChoice()
                } else {
                    setTimeout(() => {
                        dispatch(flipOut(choiceFirst, cards))
                        dispatch(flipOut(choiceSec, cards))
                        resetChoice()
                    }, 1000)
                }
                setStep(stepInc(step).payload)
            }

        }, [choiceFirst, choiceSec])

        useEffect(() => {
            let showModal = () => {
                setTimeout(() => {
                    setWin(true)
                }, 800)
            }
            if (winningArray.length === size) {
                showModal()
                setTimeout(() => {
                    setWin(false)
                }, 3800)
            }
        }, [winningArray])

        return (
            <div className={classes.App}>
                <header className={classes.App__header}>
                    <div className={`${classes.App__container} ${classes['App__container-header']}`}>
                        <Link className={classes.App__logo} to='/'>Sailor Moon</Link>
                        <Steps steps={step}/>
                    </div>
                </header>
                <div className={`${classes.App__container} ${classes['App__container-area']}`}>
                    <div className={classes.App__grid}>
                        {
                            cards.map((item, id) => {
                                return (
                                    <Card
                                        key={id}
                                        card={item}
                                        onClickHandler={() => {
                                            if (start && !choiceSec && winningArray.indexOf(item) === -1) {
                                                choiceHandler(item)
                                                dispatch(flip(cards, item))
                                            }
                                        }}
                                    />
                                )
                            })
                        }
                    </div>
                    <Button
                        buttonText={buttonText}
                        onClickHandler={() => {
                            dispatch(resetSteps())
                            setButtonText('restart')
                            setStart(true)
                            setStep(steps)
                            // setStep(resetSteps().payload)
                            setWinningArray([])
                            return dispatch(startGame(cards))

                        }}/>
                    <Modal
                        isVisible={win}
                        steps={step}/>
                </div>
            </div>
        )
}

export default App
