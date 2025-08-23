//   useEffect(() => {
    export const sampleTasks = [
      {
        id: '1',
        title: 'Design homepage layout',
        description: 'Create wireframes and mockups for the new homepage design',
        status: 'in-progress',
        priority: 'high',
        dueDate: '2023-06-15',
        assignee: '1',
        project: '1',
        labels: ['1', '3'],
        attachments: [],
        comments: [],
        estimatedHours: '8',
        completedHours: '5',
        createdAt: '2023-05-10'
      },
      {
        id: '2',
        title: 'Implement user authentication',
        description: 'Develop the backend API for user registration and login',
        status: 'todo',
        priority: 'high',
        dueDate: '2023-06-20',
        assignee: '3',
        project: '2',
        labels: ['2'],
        attachments: [],
        comments: [],
        estimatedHours: '12',
        completedHours: '0',
        createdAt: '2023-05-12'
      },
      {
        id: '3',
        title: 'Create social media campaign',
        description: 'Design graphics and copy for Q3 social media campaign',
        status: 'completed',
        priority: 'medium',
        dueDate: '2023-05-30',
        assignee: '4',
        project: '3',
        labels: ['3', '5'],
        attachments: [],
        comments: [],
        estimatedHours: '6',
        completedHours: '6',
        createdAt: '2023-04-25'
      },
      {
        id: '4',
        title: 'Fix login page bug',
        description: 'Mobile users unable to login on iOS devices',
        status: 'in-progress',
        priority: 'high',
        dueDate: '2023-06-10',
        assignee: '2',
        project: '2',
        labels: ['1', '4'],
        attachments: [],
        comments: [],
        estimatedHours: '4',
        completedHours: '2',
        createdAt: '2023-05-28'
      },
      {
        id: '5',
        title: 'Database schema update',
        description: 'Update schema to support new feature requirements',
        status: 'todo',
        priority: 'medium',
        dueDate: '2023-06-25',
        assignee: '3',
        project: '4',
        labels: ['2'],
        attachments: [],
        comments: [],
        estimatedHours: '10',
        completedHours: '0',
        createdAt: '2023-05-20'
      },
      {
        id: '6',
        title: 'Write API documentation',
        description: 'Document all endpoints for developer portal',
        status: 'todo',
        priority: 'low',
        dueDate: '2023-07-05',
        assignee: '1',
        project: '2',
        labels: ['2', '5'],
        attachments: [],
        comments: [],
        estimatedHours: '8',
        completedHours: '0',
        createdAt: '2023-05-22'
      },
      {
        id: '7',
        title: 'Conduct user testing',
        description: 'Organize and conduct usability tests for new features',
        status: 'in-progress',
        priority: 'medium',
        dueDate: '2023-06-18',
        assignee: '4',
        project: '1',
        labels: ['5'],
        attachments: [],
        comments: [],
        estimatedHours: '5',
        completedHours: '3',
        createdAt: '2023-05-15'
      },
      {
        id: '8',
        title: 'Optimize image loading',
        description: 'Implement lazy loading for product images',
        status: 'completed',
        priority: 'low',
        dueDate: '2023-05-25',
        assignee: '2',
        project: '1',
        labels: ['1'],
        attachments: [],
        comments: [],
        estimatedHours: '3',
        completedHours: '3',
        createdAt: '2023-04-30'
      }
    ];
    
    // Calculate stats
    export const calculateTaskStats = (tasks) => {
      const completed = tasks.filter(t => t.status === 'completed').length;
      const inProgress = tasks.filter(t => t.status === 'in-progress').length;
      const todo = tasks.filter(t => t.status === 'todo').length;
      const overdue = tasks.filter(t => 
        t.dueDate && new Date(t.dueDate) < new Date() && t.status !== 'completed'
      ).length;
      const highPriority = tasks.filter(t => t.priority === 'high').length;
      
      return {
        total: tasks.length,
        completed,
        inProgress,
        todo,
        overdue,
        completionRate: Math.round((completed / tasks.length) * 100),
        highPriority
      };
    };
    
//     setTasks(sampleTasks);
//     setFilteredTasks(sampleTasks);
//     setStats(calculateStats(sampleTasks));
//     setIsLoading(false);
//   }, []);