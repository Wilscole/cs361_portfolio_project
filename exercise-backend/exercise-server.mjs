import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

const budgetSchema = mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    active: { type: Boolean, required: true },
})

const categorySchema = mongoose.Schema({
    name: { type: String, required: true }
})

const Budget = mongoose.model("Budget", budgetSchema)
const Category = mongoose.model("Category", categorySchema)

const createBudget = async (name, amount, active) => {
    console.log('Creating new budget')
    const budget = new Budget({ name: name, amount: amount, active: active })
    return budget.save()
}

const createCategory = async (name, amount) => {
    console.log('Creating new category')
    const category = new Category({ name: name, amount: amount })
    return category.save()
}

const replaceBudget = async (_id, name, amount, active) => {
    const result = await Budget.replaceOne({ _id: _id }, { name: name, amount: amount, active: active })
    return result.modifiedCount
}

const findBudgetById = async (_id) => {
    const query = Budget.findById(_id);
    return query.exec();
}

const findBudgetByWeight = async (_active) => {
    const query = Budget.find({}).select({ "weight": true, _id: 0 });
    return query.exec();
}

const findBudget = async (filter, projection, limit) => {
    const query = Budget.find(filter)
        .select(projection)
        .limit(limit)
    return query.exec()
}

const deleteById = async (_id) => {
    const result = await Budget.deleteOne({ _id: _id });
    return result.deletedCount;
};


db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

export { createBudget, createCategory, findBudgetById, findBudget, replaceBudget, deleteById, findBudgetByWeight };