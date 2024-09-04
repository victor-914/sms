"use strict";
const certificateSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    type: { type: String, required: true }, // e.g., "Completion", "Excellence"
    issueDate: { type: Date, default: Date.now },
    description: { type: String }
});
const Certificate = mongoose.model('Certificate', certificateSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VydGlmaWNhdGUubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW50aXRpZXMvY2VydGlmaWNhdGUvY2VydGlmaWNhdGUubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ2pGLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFHLG1DQUFtQztJQUM1RSxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQzVDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7Q0FDOUIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyJ9