import { TFeedbackResponse } from "@/types";

import { client } from "admin/client";
import { feedbackQuery } from "./queries/feedbacks";

export const fetchFeedbacks = async (): Promise<TFeedbackResponse> => {
  const feedbacks = await client.fetch(feedbackQuery);
  return feedbacks;
};
