/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */

export interface Vote {
  id: number;
  value: number;
  profileId: number;
  voterId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  votesReceived: Vote[];
}