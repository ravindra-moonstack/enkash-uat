import { nameToUrl } from "@/src/utils"
import VoucherData, { Voucher } from "../app/vouchers/data/voucher-data"

const fetchVouchers = async (
  categoryName: string
): Promise<{
  validVouchers: Voucher[]
  apiDiscounts: Record<string, string>
}> => {
  const localVouchers: Voucher[] = Object.values(VoucherData).filter(
    (voucher) => voucher.category === categoryName
  )

  try {
    const apiResponse = await fetch(
      "https://marketplaces.enkash.in/api/v0/bolt/searchProducts?product=VOUCHER",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
        next: { revalidate: 3600 },
      }
    )

    const apiData = await apiResponse.json()
    const products = apiData.payload.data || []

    const apiDiscounts: Record<string, string> = {}
    products.forEach((product: any) => {
      apiDiscounts[nameToUrl(product.brand)] = product.discount
    })

    const validVouchers = localVouchers.filter((localVoucher) =>
      products.some(
        (product: any) =>
          nameToUrl(product.brand) === localVoucher.urlName &&
          product.active &&
          product.enabled
      )
    )

    validVouchers.forEach((voucher) => {
      voucher.discount = parseFloat(apiDiscounts[voucher.urlName])
    })

    return { validVouchers, apiDiscounts }
  } catch (error) {
    console.error("Error fetching vouchers:", error)
    return { validVouchers: [], apiDiscounts: {} }
  }
}

export default fetchVouchers
