import { TrainingsOrderByWithAggregationInput } from "../../../inputs/TrainingsOrderByWithAggregationInput";
import { TrainingsScalarWhereWithAggregatesInput } from "../../../inputs/TrainingsScalarWhereWithAggregatesInput";
import { TrainingsWhereInput } from "../../../inputs/TrainingsWhereInput";
export declare class GroupByTrainingsArgs {
    where?: TrainingsWhereInput | undefined;
    orderBy?: TrainingsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "subject" | "content" | "media" | "link" | "steps" | "updated" | "analytics" | "competency" | "course" | "grade" | "school" | "comment" | "address" | "country" | "state" | "postal" | "teacher" | "student" | "anncouncement" | "resource" | "badges" | "isPublic" | "isCompleted" | "speakers" | "fieldTrips" | "assignments" | "assignmentsDueDate" | "origanlityReport" | "products" | "faqs" | "languages" | "checklists" | "city" | "meetups" | "lab" | "digiboards" | "checklist" | "comments" | "countries" | "products_productsTotrainings" | "states">;
    having?: TrainingsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
