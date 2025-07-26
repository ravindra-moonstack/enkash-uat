const VoucherName = async ({
  params,
}: {
  params: Promise<{ voucher: string }>
}) => {
  //

  const { voucher } = await params

  return (
    <div>
      <p>{voucher}</p>
    </div>
  )
}

export default VoucherName
