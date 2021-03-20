const { hookProcessor } = require('./services')

module.exports.update = async (request, response) => {
  const {
    IdSku: skuId,
    An: account,
    IdAffiliate: affiliateId,
    DateModified: updateDate,
    IsActive: isActive,
    StockModified: stockModified,
    PriceModified: priceModified,
    HasStockKeepingUnitModified: skuUpdated, // if the SKU had any information updated
    HasStockKeepingUnitRemovedFromAffiliate: skuRemovedFromAffiliate,
  } = request.body

  // TODO: remove this after you start implementing, use debugger instead
  // this raw hook body is been showed for the sake of the example
  console.table(request.body)

  const hookPayload = {
    skuId,
    account,
    affiliateId,
    updateDate,
    isActive,
    stockModified,
    priceModified,
    skuUpdated,
    skuRemovedFromAffiliate,
  }

  // TODO: remove this after you start implementing, use debugger instead
  // this parsed hook body is been showed for the sake of the example
  console.table(hookPayload)

  // == Hook Processor Sample call ==
  // --------------------------------
  // I does not expect a return because since the return is for vtex
  // it should not really be modified. So, your hookProcessor service
  // it's supposed to generate side effects, store information, call
  // external services, etc...
  await hookProcessor(hookPayload)

  return response.send('')
}
