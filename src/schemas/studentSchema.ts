import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    marks: {
        type: [Number],
        required: true
    }
})

const studentModel = mongoose.model("student", studentSchema);

export default studentModel;