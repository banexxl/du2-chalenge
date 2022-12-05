
import Button from 'components/Button'
import Headline from 'components/Headline'
import { AppLayout } from 'components/Layouts'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { clearWishList } from "../../store/wishListSlice"
import { WishListCard } from './WishListCard'
import wishListyle from "./wishListStyle.module.scss"

function WishList() {

          const wishList = useSelector((state: any) => state.wishList)
          const dispatch = useDispatch()

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
                              <Button style={{ width: '200px' }} onClick={() => dispatch(clearWishList())}>Clear wish list</Button>
                    </AppLayout>
          )
}

export default WishList
