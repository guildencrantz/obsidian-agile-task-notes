
/**
   * Simple data class that allows for generalization of a task from any TFS
   * @public
   */
export class Task { 
  public id: string;
  public state: string;
  public title: string;
  public type: string;
  public assignedTo: string;
  public link: string;
  public desc: string;
  public due: string;

  constructor(id: string, state: string, title: string, type: string, assignedTo: string, link: string, desc: string, due?: string) {
    this.id = id;
    this.state = state;
    this.title = title;
    this.type = type;    
    this.assignedTo = assignedTo;
    this.link = link;
    this.desc = desc;
    this.due = due;
  }
}