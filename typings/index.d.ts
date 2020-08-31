declare module "ayb-api" {
  export class Manager {
    constructor(client?: any);

    fetchStats(): Promise<Stats>;
    fetchMe(): Promise<Bot | Record<string, string>>;
    fetchBot(id: string): Promise<Bot | Record<string, string>>;
    fetchCategory(id: string): Promise<Category | Record<string, string>>;
  }

  export class Bot {
    constructor(manager: Manager, data: BotOptions);

    fetchCategory(id: string): Promise<Category | Record<string, string>>;

    private $manager: Manager;
    public owner: string;
    public id: string;
    public username: string;
    public avatarURL: string;
    public votes: number;
    public categoryID: number;
    public approved: boolean;
    public certified: boolean;
    public premium: boolean;
    public prefix: string;
    public permissions: string;
    public library: string;
    public description: string;
    public website: string;
    public github: string;
    public supportServer: string;
    public invite: string;
    public url: string;
  }

  export class Category {
    constructor($manager: Manager, options: CategoryOptions);

    private $manager: Manager;
    public id: string;
    public name: string;
    public slug: string;
  }

  export interface CategoryOptions {
    id: string;
    name: string;
    slug: string;
  }

  export interface BotOptions {
    owner: string;
    clientID: string;
    username: string;
    avatarURL: string;
    votes: number;
    categoryID: number;
    approved: boolean;
    certified: boolean;
    premium: boolean;
    prefix: string;
    permissions: string;
    library: string;
    description: string;
    website: string;
    github: string;
    supportServerCode: string;
  }

  export interface Stats {
    bots: {
      total: number;
      pending: number;
      percentPending: number;
    };
  }
}
