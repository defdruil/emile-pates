import { Recipe } from './recipe';

export interface Planning {
    id?: number;
    meals: DailyMeal[];
    startingDay: Date;
}

export interface DailyMeal {
    day: Day;
    breakfast: Recipe;
    lunch: Recipe;
    dinner: Recipe;
}

export enum Day {
    Monday = 'Lundi',
    Tuesday = 'Mardi',
    Wednesday = 'Mercredi',
    Thursday = 'Jeudi',
    Friday = 'Vendredi',
    Saturday = 'Saturday',
    Sunday = 'Dimanche'
}
