import { Injectable } from '@angular/core';
import { IPlanningService } from '../interfaces/planning-service';
import { Planning } from '../../models/planning';

@Injectable()
export class PlanningService implements IPlanningService {
  addPlanning(planning: Planning) {
    throw new Error('Method not implemented.');
  }
  removePlanning(planning: Planning) {
    throw new Error('Method not implemented.');
  }
  editPlanning(planning: Planning) {
    throw new Error('Method not implemented.');
  }
  getPlanningById(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

}
