exports.seed = (knex) => {
    // Deletes ALL existing entries
    return knex('log')
        .del()
        .then(() => {
            // Inserts seed entries
            return knex('log').insert([
                {
                    status: 1,
                    event_date: '2021-04-02 10:00:00.000',
                    area: 'control_room',
                    machine: 'machine1',
                    operator: 'Tom',
                    comment: 'Tom operated the machine1 on control_room',
                },
                {
                    status: 1,
                    event_date: '2021-04-03 11:00:00.000',
                    area: 'factory_floor',
                    machine: 'machine2',
                    operator: 'Jerry',
                    comment: 'Jerry operated the machine2 on factory_floor',
                },
                {
                    status: 1,
                    event_date: '2021-04-04 12:00:00.000',
                    area: 'expedition',
                    machine: 'machine3',
                    operator: 'Tom',
                    comment: 'Tom operated the machine3 on expedition',
                },
                {
                    status: 1,
                    event_date: '2021-04-05 13:00:00.000',
                    area: 'control_room',
                    machine: 'machine1',
                    operator: 'Jerry',
                    comment: 'Jerry operated the machine1 on control_room',
                },
                {
                    status: 1,
                    event_date: '2021-04-06 14:00:00.000',
                    area: 'factory_floor',
                    machine: 'machine2',
                    operator: 'Tom',
                    comment: 'Tom operated the machine2 on factory_floor',
                },
                {
                    status: 1,
                    event_date: '2021-04-07 15:00:00.000',
                    area: 'expedition',
                    machine: 'machine3',
                    operator: 'Jerry',
                    comment: 'Jerry operated the machine3 on expedition',
                },
                {
                    status: 1,
                    event_date: '2021-04-08 16:00:00.000',
                    area: 'control_room',
                    machine: 'machine1',
                    operator: 'Tom',
                    comment: 'Tom operated the machine1 on control_room',
                },
                {
                    status: 1,
                    event_date: '2021-04-09 17:00:00.000',
                    area: 'factory_floor',
                    machine: 'machine2',
                    operator: 'Jerry',
                    comment: 'Jerry operated the machine2 on factory_floor',
                },
                {
                    status: 1,
                    event_date: '2021-04-10 18:00:00.000',
                    area: 'expedition',
                    machine: 'machine3',
                    operator: 'Tom',
                    comment: 'Tom operated the machine3 on expedition',
                },
                {
                    status: 1,
                    event_date: '2021-04-11 19:00:00.000',
                    area: 'control_room',
                    machine: 'machine1',
                    operator: 'Jerry',
                    comment: 'Jerry operated the machine1 on control_room',
                },
                {
                    status: 1,
                    event_date: '2021-04-12 20:00:00.000',
                    area: 'factory_floor',
                    machine: 'machine2',
                    operator: 'Tom',
                    comment: 'Tom operated the machine2 on factory_floor',
                },
                {
                    status: 1,
                    event_date: '2021-04-13 10:00:00.000',
                    area: 'expedition',
                    machine: 'machine3',
                    operator: 'Jerry',
                    comment: 'Jerry operated the machine3 on expedition',
                },
                {
                    status: 1,
                    event_date: '2021-04-14 11:00:00.000',
                    area: 'control_room',
                    machine: 'machine1',
                    operator: 'Tom',
                    comment: 'Tom operated the machine1 on control_room',
                },
                {
                    status: 1,
                    event_date: '2021-04-15 12:00:00.000',
                    area: 'factory_floor',
                    machine: 'machine2',
                    operator: 'Jerry',
                    comment: 'Jerry operated the machine2 on factory_floor',
                },
                {
                    status: 1,
                    event_date: '2021-04-16 13:00:00.000',
                    area: 'expedition',
                    machine: 'machine3',
                    operator: 'Tom',
                    comment: 'Tom operated the machine3 on expedition',
                },
                {
                    status: 1,
                    event_date: '2021-04-17 14:00:00.000',
                    area: 'control_room',
                    machine: 'machine1',
                    operator: 'Jerry',
                    comment: 'Jerry operated the machine1 on control_room',
                },
                {
                    status: 1,
                    event_date: '2021-04-18 15:00:00.000',
                    area: 'factory_floor',
                    machine: 'machine2',
                    operator: 'Tom',
                    comment: 'Tom operated the machine2 on factory_floor',
                },
                {
                    status: 1,
                    event_date: '2021-04-19 16:00:00.000',
                    area: 'expedition',
                    machine: 'machine3',
                    operator: 'Jerry',
                    comment: 'Jerry operated the machine3 on expedition',
                },
                {
                    status: 1,
                    event_date: '2021-04-20 17:00:00.000',
                    area: 'control_room',
                    machine: 'machine1',
                    operator: 'Tom',
                    comment: 'Tom operated the machine1 on control_room',
                },
                {
                    status: 1,
                    event_date: '2021-04-21 18:00:00.000',
                    area: 'factory_floor',
                    machine: 'machine2',
                    operator: 'Jerry',
                    comment: 'Jerry operated the machine2 on factory_floor',
                },
                {
                    status: 1,
                    event_date: '2021-04-22 19:00:00.000',
                    area: 'expedition',
                    machine: 'machine3',
                    operator: 'Tom',
                    comment: 'Tom operated the machine3 on expedition',
                },
                {
                    status: 1,
                    event_date: '2021-04-23 20:00:00.000',
                    area: 'control_room',
                    machine: 'machine1',
                    operator: 'Jerry',
                    comment: 'Jerry operated the machine1 on control_room',
                },
                {
                    status: 1,
                    event_date: '2021-04-24 10:00:00.000',
                    area: 'factory_floor',
                    machine: 'machine2',
                    operator: 'Tom',
                    comment: 'Tom operated the machine2 on factory_floor',
                },
                {
                    status: 1,
                    event_date: '2021-04-25 11:00:00.000',
                    area: 'expedition',
                    machine: 'machine3',
                    operator: 'Jerry',
                    comment: 'Jerry operated the machine3 on expedition',
                },
            ]);
        });
};
