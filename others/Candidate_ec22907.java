public class Candidate_ec22907 {
    public String getName() {
        return "Tony";
    }

    public String getSlogan() {
        return "yoyy!";
    }

    public Candidate_ec22907 vote(Candidate_ec22907[] candidates) {

        if (candidates.length == 0)
            return new Candidate_ec22907();

        for (Candidate_ec22907 c : candidates)
            if (c.getSlogan().equals("yoyy!"))
                return c;

        for (Candidate_ec22907 c : candidates)
            if (c.getName().equals("Bob"))
                return c;

        return candidates[candidates.length - 1];

    }

    public Candidate selectWinner(Candidate[] votes) {

        if (votes.length == 0)
            return new Candidate_ac1235();

        Candidate currentWinner = votes[0];

        int highestCount = 0;
        for (Candidate c : votes) {

            int count = 0;
            for (Candidate x : votes)
                if (x == c)
                    count++;
            if (count > highestCount) {
                highestCount = count;
                currentWinner = c;
            }
        }

        return currentWinner;
    }
}
