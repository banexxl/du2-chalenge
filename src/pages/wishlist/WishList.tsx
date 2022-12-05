import Headline from 'components/Headline'
import { AppLayout } from 'components/Layouts'
import { useSelector } from 'react-redux'
import { WishListCard } from './WishListCard'
import wishListyle from "./wishListStyle.module.scss"

function WishList() {

          const wishList = useSelector((state: any) => state.wishList)
          console.log("wishList:", wishList);


          return (
                    <AppLayout>
                              <Headline title="Wish List" />
                              <div className={wishListyle.wishlist_container}>
                                        {
                                                  wishList.map((cartItem: any, index: number) => {
                                                            return (
                                                                      <WishListCard key={index} id={cartItem.id}
                                                                                image={cartItem.image} price={parseFloat(cartItem.price)}
                                                                                title={cartItem.title}

                                                                      />
                                                            )

                                                  })
                                        }
                              </div>
                    </AppLayout>
          )
}

export default WishList