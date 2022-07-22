package com.Grou5.Sprint1.Controllers;

import com.Group5.Sprint1.Models.MatchesModel;
import com.Group5.Sprint1.Models.TeamModel;
import com.Group5.Sprint1.Models.TournamentModel;
import com.Group5.Sprint1.Repositories.MatchesRepository;
import com.Group5.Sprint1.Repositories.TeamRepository;
import com.Group5.Sprint1.Repositories.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/public")
public class PublicController {

    @Autowired
    TournamentRepository tournamentRepository;

    @Autowired
    MatchesRepository matchesRepository;

    @Autowired
    TeamRepository teamRepository;

    @GetMapping("/tournamentDetails/{id}")
    public List<MatchesModel> tournamentDetails(@PathVariable(value = "id")int tournamentId)
    {
        return matchesRepository.findByTournamentId(tournamentId);
    }
    @GetMapping("/tournaments")
    public List<TournamentModel> tournamentDetails()
    {
        return tournamentRepository.findAll();
    }

    @GetMapping("/getTeams")
    public List<TeamModel> getTeams()
    {
        return teamRepository.findAll();
    }
}
