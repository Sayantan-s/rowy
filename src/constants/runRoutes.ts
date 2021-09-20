export const runRepoUrl = "https://github.com/rowyio/rowyRun";

export type RunRoute = {
  path: string;
  method: "POST" | "GET";
};

type impersonateUserRequest = {
  path: "/impersonateUser";
  method: "GET";
  params: string[];
};

type ActionData = {
  ref: {
    id: string;
    path: string;
    parentId: string;
    tablePath: string;
  };
  schemaDocPath?: string;
  column: any;
  action: "run" | "redo" | "undo";
  actionParams: any;
};
type actionScriptRequest = {
  path: "/actionScript";
  method: "POST";
  body: ActionData;
};

export type runRouteRequest = actionScriptRequest | impersonateUserRequest;

export const runRoutes = {
  impersonateUser: { path: "/impersonateUser", method: "GET" } as RunRoute,
  version: { path: "/version", method: "GET" } as RunRoute,
  region: { path: "/region", method: "GET" } as RunRoute,
  firestoreRules: { path: "/firestoreRules", method: "GET" } as RunRoute,
  setFirestoreRules: { path: "/setFirestoreRules", method: "POST" } as RunRoute,
  listCollections: { path: "/listCollections", method: "GET" } as RunRoute,
  serviceAccountAccess: {
    path: "/serviceAccountAccess",
    method: "GET",
  } as RunRoute,
  checkFT2Rowy: { path: "/checkFT2Rowy", method: "GET" } as RunRoute,
  migrateFT2Rowy: { path: "/migrateFT2Rowy", method: "GET" } as RunRoute,
  actionScript: { path: "/actionScript", method: "POST" } as RunRoute,
  buildFunction: { path: "/buildFunction", method: "POST" } as RunRoute,
  projectOwner: { path: "/projectOwner", method: "GET" } as RunRoute,
  setOwnerRoles: { path: "/setOwnerRoles", method: "GET" } as RunRoute,
} as const;
