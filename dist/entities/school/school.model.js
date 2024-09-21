import mongoose, { model } from "mongoose";
// Define the School Schema
const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    owner: {
        type: String,
        trim: true,
    },
    ownerContact: {
        phone: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
        },
    },
    abbreviation: {
        type: String,
        trim: true,
        maxlength: 10,
    },
    type: {
        type: String,
        enum: ["Public", "Private", "Charter", "International"],
    },
    address: {
        street: {
            type: String,
            trim: true,
        },
        city: {
            type: String,
            trim: true,
        },
        state: {
            type: String,
            trim: true,
        },
        postalCode: {
            type: String,
            trim: true,
        },
        country: {
            type: String,
            trim: true,
        },
        province: {
            type: String,
            trim: true,
        },
    },
    companyRegistrationId: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    },
    country: {
        type: String,
        trim: true,
    },
    classes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class",
        },
    ],
    sessions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Session",
        },
    ],
    terms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Term",
        },
    ],
    gradeFormat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "GradeFormat",
    },
    assessmentFormat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AssessmentFormat",
    },
    staff: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Staff",
        },
    ],
    teachers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher",
        },
    ],
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
        },
    ],
    principals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Principal",
        },
    ],
}, {
    timestamps: true,
});
// Export the School model
export const School = model("School", schoolSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VudGl0aWVzL3NjaG9vbC9zY2hvb2wubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFnQzNDLDJCQUEyQjtBQUMzQixNQUFNLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQ3RDO0lBQ0UsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsSUFBSTtLQUNYO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsSUFBSTtLQUNYO0lBQ0QsWUFBWSxFQUFFO1FBQ1osS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsSUFBSTtTQUNYO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxDQUFDLGdCQUFnQixFQUFFLG1DQUFtQyxDQUFDO1NBQy9EO0tBQ0Y7SUFDRCxZQUFZLEVBQUU7UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxJQUFJO1FBQ1YsU0FBUyxFQUFFLEVBQUU7S0FDZDtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDO0tBQ3hEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsSUFBSTtTQUNYO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsSUFBSTtTQUNYO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1B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