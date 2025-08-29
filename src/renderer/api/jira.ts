// src/renderer/api/jira.ts
import axios from "axios";

const JIRA_BASE_URL = "https://your-domain.atlassian.net";
const EMAIL = "your-email@example.com";
const API_TOKEN = "your-api-token";

const auth = Buffer.from(`${EMAIL}:${API_TOKEN}`).toString("base64");

export interface JiraIssue {
  id: string;
  key: string;
  fields: {
    summary: string;
    assignee: {
      displayName: string;
      emailAddress: string;
    } | null;
    status: { name: string };
  };
}

// دریافت تسک‌های کاربر
export const getUserTasks = async (username: string): Promise<JiraIssue[]> => {
  const jql = `assignee="${username}" ORDER BY updated DESC`;
  const url = `${JIRA_BASE_URL}/rest/api/3/search?jql=${encodeURIComponent(jql)}`;

  const res = await axios.get(url, {
    headers: {
      Authorization: `Basic ${auth}`,
      Accept: "application/json",
    },
  });

  return res.data.issues;
};
