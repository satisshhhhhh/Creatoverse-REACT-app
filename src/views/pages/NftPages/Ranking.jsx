import React from 'react'
import Header from '../../../components/header/Header'
import HeroRanking from '../../../components/hero/HeroRanking'
import Footer from '../../../components/footer/Footer'
import useDocumentTitle from '../../../components/useDocumentTitle'






const Ranking = () => {
  useDocumentTitle(
    " Ranking"
  );
  return (
    <div className="ranking">
      <Header />
      <HeroRanking />
      <section className="section ranking mt-100">
        <div className="container">
          <div className="box d-flex table-responsive">
            <table className="table ranking ">
              <thead>
                <tr>
                  <th scope="col"><span>Collection</span></th>
                  <th scope="col"><span>Volume</span></th>
                  <th scope="col"><span>24h %</span></th>
                  <th scope="col"><span>7d %</span></th>
                  <th scope="col"><span>Floor Price</span></th>
                  <th scope="col"><span>Owners</span></th>
                  <th scope="col"><span>Assets</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="collection space-x-10">
                      <div className="media">
                        <div className="has_number">
                          1
                        </div>
                        <img src={`img/bg/collection-img.png`} alt="collection" className="collection__img" />
                      </div>
                      <div>
                        <h6 className="title color_black">Creative Art collection</h6>
                      </div>
                    </div>
                  </td>
                  <td><span>12,4353</span></td>
                  <td><span className="color_green">+3456%</span></td>
                  <td><span className="color_red">-564%</span></td>
                  <td><span>12,4353 ETH</span></td>
                  <td><span>3.3k<span /></span></td>
                  <td><span>23k<span /></span></td>
                </tr>
                <tr>
                  <td>
                    <div className="collection space-x-10">
                      <div className="media">
                        <div className="has_number">
                          1
                        </div>
                        <img src={`img/bg/collection-img.png`} alt="collection" className="collection__img" />
                      </div>
                      <div>
                        <h6 className="title color_black">Creative Art collection</h6>
                      </div>
                    </div>
                  </td>
                  <td><span>12,4353</span></td>
                  <td><span className="color_green">+3456%</span></td>
                  <td><span className="color_red">-564%</span></td>
                  <td><span>12,4353 ETH<span /></span></td>
                  <td><span>3.3k<span /></span></td>
                  <td><span>23k<span /></span></td>
                </tr>
                <tr>
                  <td>
                    <div className="collection space-x-10">
                      <div className="media">
                        <div className="has_number">
                          1
                        </div>
                        <img src={`img/bg/collection-img.png`} alt="collection" className="collection__img" />
                      </div>
                      <div>
                        <h6 className="title color_black">Creative Art collection</h6>
                      </div>
                    </div>
                  </td>
                  <td><span>12,4353</span></td>
                  <td><span className="color_green">+3456%</span></td>
                  <td><span className="color_red">-564%</span></td>
                  <td><span>12,4353 ETH<span /></span></td>
                  <td><span>3.3k<span /></span></td>
                  <td><span>23k<span /></span></td>
                </tr>
                <tr>
                  <td>
                    <div className="collection space-x-10">
                      <div className="media">
                        <div className="has_number">
                          1
                        </div>
                        <img src={`img/bg/collection-img.png`} alt="collection" className="collection__img" />
                      </div>
                      <div>
                        <h6 className="title color_black">Creative Art collection</h6>
                      </div>
                    </div>
                  </td>
                  <td><span>12,4353</span></td>
                  <td><span className="color_green">+3456%</span></td>
                  <td><span className="color_red">-564%</span></td>
                  <td><span>12,4353 ETH<span /></span></td>
                  <td><span>3.3k<span /></span></td>
                  <td><span>23k<span /></span></td>
                </tr>
                <tr>
                  <td>
                    <div className="collection space-x-10">
                      <div className="media">
                        <div className="has_number">
                          1
                        </div>
                        <img src={`img/bg/collection-img.png`} alt="collection" className="collection__img" />
                      </div>
                      <div>
                        <h6 className="title color_black">Creative Art collection</h6>
                      </div>
                    </div>
                  </td>
                  <td><span>12,4353</span></td>
                  <td><span className="color_green">+3456%</span></td>
                  <td><span className="color_red">-564%</span></td>
                  <td><span>12,4353 ETH<span /></span></td>
                  <td><span>3.3k<span /></span></td>
                  <td><span>23k<span /></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />

    </div >
  )
}

export default Ranking
