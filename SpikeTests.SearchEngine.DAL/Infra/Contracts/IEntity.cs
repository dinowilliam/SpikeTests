﻿using System;
using System.Collections.Generic;
using System.Text;

namespace SpikeTest.SearchEngine.DAL.Infra.Contracts {
   public interface IEntity {
        Guid Id { get; set; }
    }
}
