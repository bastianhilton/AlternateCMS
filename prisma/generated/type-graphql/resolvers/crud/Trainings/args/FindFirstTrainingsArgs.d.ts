import { TrainingsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TrainingsOrderByWithRelationAndSearchRelevanceInput";
import { TrainingsWhereInput } from "../../../inputs/TrainingsWhereInput";
import { TrainingsWhereUniqueInput } from "../../../inputs/TrainingsWhereUniqueInput";
export declare class FindFirstTrainingsArgs {
    where?: TrainingsWhereInput | undefined;
    orderBy?: TrainingsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: TrainingsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "subject" | "content" | "media" | "link" | "steps" | "updated" | "analytics" | "competency" | "course" | "grade" | "school" | "comment" | "address" | "country" | "state" | "postal" | "teacher" | "student" | "anncouncement" | "resource" | "badges" | "isPublic" | "isCompleted" | "speakers" | "fieldTrips" | "assignments" | "assignmentsDueDate" | "origanlityReport" | "products" | "faqs" | "languages" | "checklists" | "city" | "meetups" | "lab" | "digiboards" | "checklist" | "comments" | "countries" | "products_productsTotrainings" | "states"> | undefined;
}
