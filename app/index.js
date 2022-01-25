exports.filter_transactions = (req, res) => {
  try {
    const categories = req.body.category_ids
    const transactions = req.body.transactions

    const result = []

    transactions.forEach((t) => {
      // Skip deleted transactions.
      if (t.deleted) {
        return
      }

      // Skip transactions whose `category_id` is not among the `categories` provided.
      if (categories.includes(t.category_id) === false) {
        return
      }

      // Skip transactions that are not expenses (i.e., must have a negative amount).
      if (t.amount >= 0) {
        return
      }

      // Save transaction.
      result.push(t)
    })

    res.status(200).send({ transactions: result })
  } catch (err) {
    console.error(err)
    res.status(400).send(err)
  }
}
