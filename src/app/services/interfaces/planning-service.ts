import { Planning } from '../../models/planning';

export interface IPlanningService {
    addPlanning(planning: Planning);

    removePlanning(planning: Planning);

    editPlanning(planning: Planning);

    getPlanningById(id: number);
}
