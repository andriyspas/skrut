import React from 'react';
import Header from  './Header';
import {Grid, Row, Col} from  'react-bootstrap';

const AboutUs = () =>
    <div className="about-us">
        <Header/>
        <Grid>
            <Row>
                <Col xs={12}>
                    <div className="about-us__title">Запрошуємо на відпочинок у Карпати.</div>
                </Col>

                <Col xs={12}>
                    <div className="about-us__description about-us__description--columns">
                        <div>
                            Ви бажаєте побувати на природі одночасно не втрачаючи комфорту - завітайте до нас. Ми не
                            конкуруємо ні по набору пропозицій ні по ціні: баланс надто поміркованої вартості з хорошими
                            умовами - це те, на що Ви можете розраховувати.
                        </div>
                        <div>
                            Садиба "У діда Віктора" розташована і в м.Яремче, Ів-Франківської області - це Українські
                            Карпати, з їх неповторними краєвидами, унікальною природою, умовами для активного відпочинку
                            та самобутніми народними традиціями.
                        </div>
                        <div>
                            Садиба "У діда "Віктора" має зручне розташування - з одного боку це тихе зелене місце під
                            скелею Слон, яка височіє над гірською річкою Прут з каскадом перекатів - природним аналогом
                            джакузі. З іншого за 10-15 хвилин пішки можна дістатитися до залізничного та автовокзалів,
                            магазинів, ринку, закладів харчування більшості муніципальних та державних установ тощо.
                        </div>
                        <div>
                            Шанувальники карпатської природи оцінять близькість річки та лісу, чисте гірське повітря та
                            кришталеві водограї. До Ваших послуг туристичні маршрути різної складності для різних пір
                            року.Хто планує зимовий відпочинок, оцінить те, що до нас зручно дістатися за будь якої
                            зимової погоди і те, що від нас Ви швидко зможете потрапити на зимові лижні траси
                            туркомплексу Буковельта с. Яблуниця.
                        </div>
                        <div>
                            В подвір'ї є місце для стоянки кількох авто. Також до Ваших послуг мангал з дровами та міце
                            длявідпочинку на повітрі під розлогими старими яблунями.
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} className="about-us__image">
                    <img src="http://media.istockphoto.com/photos/carpathian-mountains-yaremche-ivanofrankivska-oblast-ukraine-mountain-picture-id641062512" alt=""/>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <div className="about-us__title">
                        Сплануйте свій час перебування в Яремче - це дозволить вам правильно розрахувати тривалість
                        візиту та зберегти свій час та кошти.
                    </div>
                </Col>

                <Col xs={12} sm={6}>
                    <div className="about-us__description">
                        <div>
                            Незалежно від пори року Ви зможете познайомитись з Яремчанщиною відвідавши сувенірний ринок
                            з його розмаїттям творів гуцульських майстрів. Обов′язково прийдіть на водоспад "Пробій",
                            щоби відчути силу гірського стрімкого потоку.
                        </div>

                        <div>
                            Познайомитись із мешканцями карпатських гір
                            можна у вольєрному господарстві Карпатського національного природного парку. Познайомитись з
                            гуцульською кухнею можна як у світському ресторані так і гуцульській колибі поряд з
                            традиційним вогнищем в центрі приміщення.
                        </div>

                        <div>
                            P.S. Поряд із садибою господарі знайшли скам`янілі відбитки явно доісторичного походження.
                            На фото явно просліджується три пальці та п`ята - можливо експерти зможуть ідентифікувати
                            колишніх господарів Яремчанщини ?!
                        </div>
                    </div>
                </Col>

                <Col xs={12} sm={6} className="about-us__image">
                    <img src="http://media.istockphoto.com/photos/carpathian-mountains-yaremche-ivanofrankivska-oblast-ukraine-mountain-picture-id641062512" alt=""/>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <div className="about-us__title">
                        Додаткова інформація для клієнтів
                    </div>
                </Col>

                <Col className="col-sm-push-6" xs={12} sm={6}>
                    <div className="about-us__description">
                        <div>
                            Своїм гостям для проживання ми пропонуємо номер на другому поверсі дерев'яної садиби. В
                            будівництві та озоблення максимально використано дерево. Номер єдиний, таким чином у Вас не
                            буде жодних посторонніх сусідів, окрім господарів. Комфортно розташуватися тут взмозі як
                            молода пара, так і сім"я з 4 осіб або дружнє товариство. Опалення автономне водяне, гаряча
                            вода постійно, зручне місце для сушіння одягу та взуття. Під'їзд - асфальтове покриття.
                        </div>

                        <div>
                            Ми зустрінемо своїм транспортом на вокзалі, надамо велосипеди для прогулянки, доможемо
                            визначитись з програмою відпочинку, організуємо баню (сауну)*.
                        </div>
                    </div>
                </Col>

                <Col xs={12} sm={6} className="col-sm-pull-6">
                    <div className="about-us__image">
                        <img src="http://media.istockphoto.com/photos/carpathian-mountains-yaremche-ivanofrankivska-oblast-ukraine-mountain-picture-id641062512" alt=""/>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} sm={4}>
                    <div className="about-us__forwarding">
                        <a href="/gallery">Zobacz zdjęcia</a>
                    </div>
                </Col>
                <Col xs={12} sm={4}>
                    <div className="about-us__forwarding">
                        <a href="/offers">Zobacz nasze oferty</a>
                    </div>
                </Col>
                <Col xs={12} sm={4}>
                    <div className="about-us__forwarding">
                        <a href="/contact">Napisz do nas</a>
                    </div>
                </Col>
            </Row>
        </Grid>

    </div>;

export default AboutUs;