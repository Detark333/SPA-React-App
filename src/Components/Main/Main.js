import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Order from '../Order/Order.js'
import Catalog from '../Catalog/Catalog.js'
import Cart from '../Cart/Cart.js'
import {Context} from '../../Context/Context.js'
import {SumContext} from '../../Context/SumContext.js'
import {OrderContext} from '../../Context/OrderContext.js'
const SECTIONS = [
    { id: 0, title: 'Ручка', price: 100 },
    { id: 1, title: 'Пенал', price: 55 },
    { id: 2, title: 'Стикер', price: 65 },
    { id: 3, title: 'Ножницы', price: 73 },
    { id: 4, title: 'Отвертка', price: 1000 },
    { id: 5, title: 'Карандаш', price: 44 },
    { id: 6, title: 'Товар', price: 500 },
    { id: 7, title: 'Товар', price: 350 },
    { id: 8, title: 'Товар', price: 200 },
    { id: 9, title: 'Товар', price: 700 },
    { id: 10, title: 'Товар', price: 600 },
    { id: 11, title: 'Товар', price: 800 },
    { id: 12, title: 'Товар Товар Товар', price: 900 },
    { id: 13, title: 'Товар', price: 555 },
    { id: 14, title: 'Товар', price: 666 },
    { id: 15, title: 'Товар', price: 666 },
    { id: 16, title: 'Товар', price: 999 },
    { id: 17, title: 'Товар', price: 444 },
    { id: 18, title: 'Товар', price: 333 },
    { id: 19, title: 'Товар', price: 222 },
    { id: 20, title: 'Товар', price: 123 },
    { id: 21, title: 'Товар', price: 456 },
    { id: 22, title: 'Товар', price: 789 },
    { id: 23, title: 'Товар', price: 987 },
    { id: 24, title: 'Товар', price: 645 },
    { id: 25, title: 'Товар', price: 312 },
    { id: 26, title: 'Товар', price: 852 },
    { id: 27, title: 'Товар', price: 258 },
    { id: 28, title: 'Товар', price: 147 },
    { id: 29, title: 'Товар', price: 369 },
    { id: 30, title: 'Товар', price: 653 }
]

class Main extends React.Component{
    state= {
        massiveCart: [],
        Sections: SECTIONS,
        sum: [],
        card: {
            CardName: 'xxxxx xxx',
            CardNumber: '0000000000000000',
            CardMonth: 'xx',
            CardDay: 'xx',
            CardCCV: 'CCV'
        },
        userInformation: {
            SecondName: '',
            Name: '',
            ThirdName: '',
            SeriesPassport: '',
            NumberPassport: '',
            DateExtradition: ''
        },
        adressInformation: {}
    }
    render() {
        return (
            <div>
                <Context.Provider value={this.state.Sections}>
                    <SumContext.Provider value={{
                        sumMassive: this.state.sum,
                        addSumMassive: (id , name, price) => {
                            let sumMassive = this.state.sum
                            sumMassive.push({id: id,name: name, price: price, priceCart: price, count: 1})
                            this.setState({
                                sum: sumMassive
                            });
                        },
                        delSumMassive: id => {
                            let sumMassive = this.state.sum
                            sumMassive.forEach((item, index) => {
                                if(item.id === id){
                                    sumMassive.splice(index, 1)
                                }
                            })
                            this.setState({
                                sum: sumMassive
                            });
                        },
                        changeItemSumMassive: (id , NewPrice, NewCount) => {
                            let sumMassive = this.state.sum
                            sumMassive.forEach((item) => {
                                if(item.id === id){
                                    item.priceCart = NewPrice
                                    item.count = NewCount
                                }
                            })
                            this.setState({
                                sum: sumMassive
                            });
                            console.log(this.state.sum)
                        }
                    }}>
                        <OrderContext.Provider value={{
                            card: this.state.card,
                            userInformation: this.state.userInformation,
                            addCardNameInformation: (name) => {
                                let card= this.state.card
                                card.CardName = name
                                this.setState({
                                    card
                                })
                            },
                            addCardNumberInformation: (number) => {
                                let card= this.state.card
                                card.CardNumber = number
                                this.setState({
                                    card
                                })
                            },
                            addCardCVVInformation: (cvv) => {
                                let card= this.state.card
                                card.CardCCV = cvv
                                this.setState({
                                    card
                                })
                            },
                            addCardMonthInformation: (month) => {
                                let card= this.state.card
                                card.CardMonth = month
                                this.setState({
                                    card
                                })
                            },
                            addCardDayInformation: (day) => {
                                let card= this.state.card
                                card.CardDay = day
                                this.setState({
                                    card
                                })
                            },
                            addUserNameInformation: (name) => {
                                let userInformation = this.state.userInformation
                                userInformation.Name = name
                                this.setState({
                                    userInformation
                                })
                            },
                            addUserSecondNameInformation: (secondName) => {
                                let userInformation = this.state.userInformation
                                userInformation.SecondName = secondName
                                this.setState({
                                    userInformation
                                })
                            },
                            addUserThirdNameInformation: (thirdName) => {
                                let userInformation = this.state.userInformation
                                userInformation.ThirdName = thirdName
                                this.setState({
                                    userInformation
                                })
                            },
                            addUserSeriesPassportInformation: (series) => {
                                let userInformation = this.state.userInformation
                                userInformation.SeriesPassport = series
                                this.setState({
                                    userInformation
                                })
                            },
                            addUserNumberPassportInformation: (number) => {
                                let userInformation = this.state.userInformation
                                userInformation.NumberPassport = number
                                this.setState({
                                    userInformation
                                })
                            },
                            addUserDateExtraditionInformation: (date) => {
                                let userInformation = this.state.userInformation
                                userInformation.DateExtradition = date
                                this.setState({
                                    userInformation
                                })
                            },
                            addAdressInformation: (marker) => {
                                this.setState({
                                    adressInformation: marker
                                })
                            }
                        }}>
                            <Switch>
                                <Route path='/' exact component={Catalog}/>
                                <Route path='/cart' component={Cart}/>
                                <Route path='/order' component={Order}/>
                                <Redirect from="*" to="/" />
                            </Switch>
                        </OrderContext.Provider>
                    </SumContext.Provider>
                </Context.Provider>
            </div>
        );
    }
}

export default Main;