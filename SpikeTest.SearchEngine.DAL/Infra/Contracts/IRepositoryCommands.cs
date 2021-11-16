using System.Collections.Generic;

namespace SpikeTest.SearchEngine.DAL.Infra.Contracts {
    public interface IRepositoryCommands<TEntity> where TEntity : class, IEntity {
        
        int Insert(TEntity entity);
        int AddRange(IEnumerable<TEntity> entities);
        int Update(TEntity entity);
        int Delete(TEntity entity);       
    }
}
