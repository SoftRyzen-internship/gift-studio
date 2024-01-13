import { FeedbackResponse } from "@/types";

import { client } from "admin/client";
import { feedbackQuery } from "./queries/feedbacks";

export const fetchFeedbacks = async (): Promise<FeedbackResponse> => {
  const feedbacks = await client.fetch(feedbackQuery);
  return feedbacks;
};
